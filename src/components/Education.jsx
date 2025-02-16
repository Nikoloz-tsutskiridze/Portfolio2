import { useRef, useState } from "react";
import { EDUCATION } from "../constants";

function Education() {
  const educationRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <>
      <section className="lg:px-32" id="education" ref={educationRef}>
        <div className="mx-auto max-w-full px-4">
          <h2 className="my-10 text-center text-4xl font-bold lg:text-6xl mt-24">
            Education
          </h2>
          <div className="flex flex-col space-y-8">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="education-item flex flex-col lg:flex-row lg:items-center rounded-xl border border-purple-300/20 p-6"
              >
                <div className="flex-1">
                  <h3 className="mb-2 text-lg lg:text-2xl">{edu.degree}</h3>
                  <h4 className="text-lg font-medium lg:text-xl text-lime-300">
                    {edu.institution}
                  </h4>
                  <p className="text-sm lg:text-base text-lime-300">
                    {edu.duration}
                  </p>
                  <p className="mt-4">{edu.description}</p>
                </div>
                {edu.certificateThumbnail && (
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <img
                      src={edu.certificateThumbnail}
                      alt={`${edu.degree} certificate`}
                      className="h-42 w-48 cursor-pointer rounded-lg object-cover transition-transform hover:scale-105 lg:mt-auto lg:self-end mx-auto"
                      onClick={() => openModal(edu.certificatePDF)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <iframe
              src={modalImage}
              className="w-full h-[90vh] rounded-lg"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Education;
