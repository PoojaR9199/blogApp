import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    // <Editor
    //   initialValue="default value"
    //   init={{
    //     branding: false,
    //     height: 500,
    //     menubar: true,
    //     plugins: [
    //       "advlist autolink link lists image charmap print preview anchor",
    //       "searchreplace visualblocks code fullscreen",
    //       "insertdatetime media table paste code help wordcount",
    //     ],
    //     toolbar:
    //       "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify| bullist numlist | outdent indent | removeformat | help",
    //   }}
    // ></Editor>
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control} //this control is given by the parent element
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="pa56atdvkjqgalnss4r8c06ac1m59tcymuufweggiabsoe59"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "advlist autolink link lists image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | blocks | image | formatselect | bold italic backcolor forecolor | alignleft aligncenter alignright alignjustify| bullist numlist | outdent indent | removeformat | help",
              content_style:
                "body{ font-family :Helvetica, Arial, sans-serif; font-size:14px",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
