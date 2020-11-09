import { NextPage } from "next";
import { FC, ReactElement } from "react";

export type BaaasPage = NextPage & { Layout?: FC | ReactElement };
