import * as React from "react";
import { ButtonProps } from "../../atoms/button";

export enum MyEnum {
  OPTION1,
  OPTION2 = "Option 2",
  OPTION3 = 42
}

export interface TestProps {
  myString: string;
  myStrings: string[];
  myOptionalString?: string;
  myNumber: number;
  myNumbers: number[];
  myBoolean: boolean;
  myEnum: MyEnum;
  myObject: { [key: string]: any };
  myPattern: ButtonProps;
  myUnknown1: string | number;
  myUnknown2: boolean[];

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
}

const Test: React.StatelessComponent<TestProps> = (props): JSX.Element => {
  return <div>test</div>;
};

export default Test;
