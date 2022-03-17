const TechnicalSkills = () => {
    return <>
        <div className="mt-1 md:mt-40 grid grid-rows-1 place-items-center">
        <div className="p-5">
          <h1 className="text-3xl">Technical skills</h1>
        </div>
        <div className="mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex justify-center p-2">
              <img className="h-12 w-12" src="./salesforceIcon.png" alt="react Icon" />
            </div>
            <div className="flex justify-center p-2">
              <img className="h-12 w-12" src="./logo512.png" alt="react Icon" />
            </div>
            <div className="flex justify-center p-2">
              <img className="h-12 w-12"src="./adobeXdIcon.png" alt="react Icon" />
            </div>
            <div className="flex justify-center p-2">
              <img className="h-12 w-12" src="./jsIcon.png" alt="react Icon" />
            </div>
          </div>
        </div>
      </div>
    </>
}

export default TechnicalSkills