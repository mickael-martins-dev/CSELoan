// import { Record } from "@deepstream/client/dist/src/record/record";

export interface Item {
    [x: string]: number | string | TItemType | ILoan[];

    index:          number;
    name:           string;
    description:    string;
    category:       string;
    type:           TItemType;
    loans:          ILoan[];
}

export interface ILoan {
    [x: string]: number | string | TLoanType;
    loaner:                     string;             // Matricule
    beginTimeStampInSecond:     number;             
    endTimeStampInSecond:       number;
    type:                       TLoanType;          // Type
}

export type TLoanType = {'Reserved', 'Out'};
export type TItemType = {'GAMES'};