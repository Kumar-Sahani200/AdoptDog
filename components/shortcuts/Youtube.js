"use client";

const Youtube = () => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5174efAJQXI?si=uVXJhM0ftn4gKi66"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-2xl mb-10 mt-4 youtube"
    ></iframe>
  );
};

export default Youtube;
