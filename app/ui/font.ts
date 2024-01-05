/// @dev importing font from next/font/google
import { Inter } from "next/font/google";
import {Lusitana} from "next/font/google";

/// @dev exporting the font, latin is subset
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: '700'});