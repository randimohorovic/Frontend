import { TextInput, Select } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Post() {
  //mx auto centar dovest
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Kreiraj objavu
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Naslov objave"
            require
            id="naslov"
            className="flex-1"
          />
          <Select>
            <option value="empty">Odaberi kategoriju</option>
            <option value="IT">IT</option>
            <option value="Pomoćni poslovi">Pomoćni poslovi</option>
            <option value="Administrativni poslovi">
              Administrativni poslovi
            </option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-cyan-500 border-dotted p-3"></div>
        <ReactQuill
          theme="snow"
          placeholder="Opis..."
          className="h-72 mb-12 "
        />
        ;
      </form>
    </div>
  );
}
