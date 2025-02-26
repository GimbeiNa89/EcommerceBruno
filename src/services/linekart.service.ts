import { ILineKart } from "../types/line_kart.type";
import { LineKart } from "../models/line_kart.model";

export const lineKartShow = async (): Promise<ILineKart[]> => {
  return await LineKart.find();
};

export const linekartAdd = async (linekart: ILineKart): Promise<ILineKart> => {
  return await LineKart.create(linekart);
};

export const linekartdeleted = async (
  id: string
): Promise<ILineKart | null> => {
  return await LineKart.findByIdAndDelete(id);
};

export const linekartUpdate = async (
  id: string,
  body: ILineKart
): Promise<ILineKart | null> => {
  return await LineKart.findByIdAndUpdate(id, body, { new: true });
};
