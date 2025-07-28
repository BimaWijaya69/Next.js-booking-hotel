"use server";
import { ContactSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";

export const ContactMessage = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validateFields.data;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    return {
      message: "Thanks for contacting us! We will get back to you soon.",
    };
  } catch (error) {
    console.log(error);
  }
};
