import React from "react";

function Card({username ="dogs", post = "London",myArr,obj,imgsrc}) {
  //console.log(props);
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={imgsrc || "public/images.jpeg"}
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              architecto nostrum dolor eum laboriosam labore ducimus nisi sint
              eos, qui quis numquam. Velit, quaerat sit quos maiores non
              assumenda est
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              {username || "orange cat"} 
            </div>
            <div class="text-slate-700 dark:text-slate-500">{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
