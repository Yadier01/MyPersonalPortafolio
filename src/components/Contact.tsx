import React from "react";

// eslint-disable-next-line react/display-name
export const Contact = React.forwardRef<HTMLDivElement, { text: string }>(
  ({ text }, ref) => {
    return (
      <section
        className="h-screen
        bg-slate-900 text-white py-20 items-center justify-between flex-row-reverse flex"
        ref={ref}
      >
        <div className="flex  rounded-lg w-full  items-center flex-row-reverse  justify-around  gap-10 p-2">
          <h2 className="text-5xl text-center ">{text}</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="grid place-contet-center  w-1/2 h-full
           text-black "
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="bg-inc-100 grid gap-3  text-white rounded-lg ">
              <input
                type="text"
                placeholder="Name*"
                name="name"
                className="bg-slate-900 border-b solid border-gray-200 p-2 roundedlg outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                name="email"
                required
                className="bg-slate-900 border-b solid border-gray-200 p-2 outline-none"
              />
              <textarea
                name="message"
                required
                cols={10}
                rows={5}
                minLength={10}
                className="bg-slate-900 border-b solid border-gray-200 p-2 outline-none "
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
        </div>
      </section>
    );
  },
);
