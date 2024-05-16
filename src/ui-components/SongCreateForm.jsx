/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, Heading, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSong } from "../graphql/mutations";
const client = generateClient();
export default function SongCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    artist: "",
    description: "",
    url: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [artist, setArtist] = React.useState(initialValues.artist);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [url, setUrl] = React.useState(initialValues.url);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setArtist(initialValues.artist);
    setDescription(initialValues.description);
    setUrl(initialValues.url);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    artist: [{ type: "Required" }],
    description: [],
    url: [{ type: "Required" }, { type: "URL" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          artist,
          description,
          url,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createSong.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SongCreateForm")}
      {...rest}
    >
      <Heading
        level={4}
        children="Share your latest song!"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Title</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              artist,
              description,
              url,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Artist</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={artist}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              artist: value,
              description,
              url,
            };
            const result = onChange(modelFields);
            value = result?.artist ?? value;
          }
          if (errors.artist?.hasError) {
            runValidationTasks("artist", value);
          }
          setArtist(value);
        }}
        onBlur={() => runValidationTasks("artist", artist)}
        errorMessage={errors.artist?.errorMessage}
        hasError={errors.artist?.hasError}
        {...getOverrideProps(overrides, "artist")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              artist,
              description: value,
              url,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>YouTube URL</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="Songs must be uploaded to YouTube"
        isRequired={true}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              artist,
              description,
              url: value,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
