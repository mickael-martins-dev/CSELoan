// import { Record } from "@deepstream/client/dist/src/record/record";

export interface Item {
    [x: string]: number | string | ILoan[];

    index:          number;
    name:           string;
    description:    string;
    type:           string;
    loans:          ILoan[];
}

export interface ILoan {
    [x: string]: number | string | TLoanType;
    loaner:                     string;             // Matricule
    beginTimeStampInSecond:     number;             
    endTimeStampInSecond:       number;
    type:                       TLoanType;          // Type
}

export type TLoanType = {'Reserved', 'Out', 'Available'};