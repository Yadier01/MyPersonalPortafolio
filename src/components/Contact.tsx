import React from "react";

export const Contact = React.forwardRef<HTMLDivElement, { text: string }>(
  ({ text }, ref) => {
    return (
      <section
        className="h-screen 
        bg-slate-900 text-white py-20"
        ref={ref}
      >
        <h2 className="text-5xl text-center">{text}</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="grid place-content-center h-full 
           text-black "
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="bg-zinc-100 grid gap-3 p-3  rounded-lg ">
            <input
              type="text"
              placeholder="Name*"
              name="name"
              className="bg-zinc-200 p-2 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              name="email"
              required
              className="bg-zinc-200 p-2 rounded-lg"
            />
            <textarea
              name="message"
              required
              cols={30}
              rows={10}
              minLength={10}
              className="bg-zinc-200 p-2 rounded-lg"
            ></textarea>
            <button
              type="submit"
              value="submit"
              className="px-4 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
);
