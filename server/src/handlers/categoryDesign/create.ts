import { Response } from "express";
import { NextFncReq } from "../../middleware";
import { PrismaSingleton } from "../../clients/db";
import { z } from "zod";
const prismaClient = PrismaSingleton.getInstance().prisma;

export const designInput = z.object({
  id: z.string().optional(),
  categoryId: z.string().optional(),
  title: z.string().max(50),
  description: z.string(),
  imageUrl: z.string(),
  popular: z.boolean(),
});

export async function createDesign(req: NextFncReq, res: Response) {
  try {
    const reqBody = req.body;

    const parsedInput = designInput.safeParse(reqBody);

    if (!parsedInput.success) {
      return res.status(401).json({
        success: false,
        message: "Invalid Input",
      });
    }

    const { categoryId, title, imageUrl, description, popular } =
      parsedInput.data;

    const design = await prismaClient.sofaDesign.create({
      data: {
        title,
        imageUrl,
        description,
        popular,
        category: { connect: { id: categoryId } },
      },
    });

    return res.status(200).json({
      success: true,
      message: "design created successfully",
      design,
    });
  } catch (e: any) {
    return res.status(401).json({
      success: false,
      message: e.message,
    });
  }
}
