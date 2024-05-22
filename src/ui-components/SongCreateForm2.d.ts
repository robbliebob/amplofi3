/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SongCreateForm2InputValues = {
    title?: string;
    artist?: string;
    description?: string;
    url?: string;
};
export declare type SongCreateForm2ValidationValues = {
    title?: ValidationFunction<string>;
    artist?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SongCreateForm2OverridesProps = {
    SongCreateForm2Grid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    artist?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SongCreateForm2Props = React.PropsWithChildren<{
    overrides?: SongCreateForm2OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SongCreateForm2InputValues) => SongCreateForm2InputValues;
    onSuccess?: (fields: SongCreateForm2InputValues) => void;
    onError?: (fields: SongCreateForm2InputValues, errorMessage: string) => void;
    onChange?: (fields: SongCreateForm2InputValues) => SongCreateForm2InputValues;
    onValidate?: SongCreateForm2ValidationValues;
} & React.CSSProperties>;
export default function SongCreateForm2(props: SongCreateForm2Props): React.ReactElement;
