import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const Contact = React.forwardRef<HTMLDivElement, { text: string }>(
  ({ text }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
      <section className="h-screen  bg-zinc-900 text-white py-20" ref={ref}>
        <h2 className="text-5xl text-center">{text}</h2>
        <form
          action=""
          className="grid place-content-center h-full  text-black "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="bg-zinc-100 grid gap-3 p-7 rounded-lg ">
            <input
              type="text"
              placeholder="Name*"
              {...register("name", { required: true })}
              className="bg-zinc-200 p-4 rounded-lg"
            />
            {errors.name && <span>This field is required</span>}
            <input
              type="email"
              placeholder="Email*"
              {...register("email", { required: true })}
              required
              className="bg-zinc-200 p-4 rounded-lg"
            />
            <textarea
              id="message"
              required
              cols={30}
              rows={10}
              {...register("message", { required: true })}
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
