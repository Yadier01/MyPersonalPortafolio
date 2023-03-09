import React from "react";

export const Contact = React.forwardRef<HTMLDivElement, { text: string }>(
  ({ text }, ref) => {
    return (
      <section className="h-screen  bg-zinc-900 text-white py-20" ref={ref}>
        <h2 className="text-5xl text-center">{text}</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="grid place-content-center h-full  text-black m-auto"
        >
          <div className="bg-zinc-100 grid gap-3 p-7 rounded-lg ">
            <input
              type="text"
              placeholder="Name*"
              className="bg-zinc-200 p-4 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="bg-zinc-200 p-4 rounded-lg"
            />
            <textarea
              id="message"
              required
              cols={30}
              rows={10}
              minLength={10}
              className="bg-zinc-200 p-4 rounded-lg"
            ></textarea>
            <input
              type="submit"
              value="submit"
              className="px-4 cursor-pointer"
            />
          </div>
        </form>
      </section>
    );
  }
);
