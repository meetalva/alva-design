import * as React from "react";
import { ButtonProps } from "../../atoms/button";

export enum MyEnum {
  /**
   * @name "Option 1"
   */
  OPTION1,
  /**
   * @name "Option 2"
   */
  OPTION2,
  /**
   * @name "Option 3"
   */
  OPTION3
}

export interface TestProps {
  /**
   * @name My aweome string
   */
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
