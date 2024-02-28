import { Response } from "express";
import { NextFncReq } from "../../middleware";
import { PrismaSingleton } from "../../clients/db";
import { z } from "zod";
const prismaClient = PrismaSingleton.getInstance().prisma;

export const categoryInput = z.object({
  id: z.string().optional(),
  title: z.string().max(50),
  description: z.string().max(510),
  imageUrl: z.string(),
  popular: z.boolean(),
});

export async function createCategory(req: NextFncReq, res: Response) {
  try {
    const reqBody = req.body;

    const parsedInput = categoryInput.safeParse(reqBody);

    if (!parsedInput.success) {
      return res.status(401).json({
        success: false,
        message: "Invalid Input",
      });
    }

    const { title, imageUrl, description, popular } = parsedInput.data;

    const category = await prismaClient.sofaCategory.create({
      data: {
        title,
        description,
        imageUrl,
        popular,
      },
    });

    return res.status(200).json({
      success: true,
      message: "category created successfully",
      category,
    });
  } catch (e: any) {
    return res.status(401).json({
      success: false,
      message: e.message,
    });
  }
}
