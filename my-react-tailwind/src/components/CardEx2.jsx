
const CardEx2 = () => {
  return (
    <>
        <div>
  <div className="flex flex-col gap-2 p-5 justify-center bg-slate-200 w-96 m-auto rounded-xl">
    {/* <div className="w-48 m-auto">
        <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#1bffee" stroke="#1b45ee"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> <path className="st0" d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087 c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512 c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"></path> <path className="st0" d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0 c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"></path> </g> </g></svg>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 21c-2.757 0-5 2.243-5 5 0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.757-2.243-5-5-5zm0 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#374151" />
    </div> */}

    <div className="flex flex-col justify-center">
      <div className="my-5 text-center">
        <h2 className="text-3xl font-semibold">Your Name Here</h2>
        <p className="my-3">Software Engineer</p>
      </div>
      <div className="flex gap-6 justify-center"> 
        <a href="https://github.com/your-github-username" className="text-gray-700 hover:text-black">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" alt="GitHub" className="size-10" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile/" className="text-gray-700 hover:text-blue-700">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" alt="LinkedIn" className="size-10" />
        </a>
        <a href="https://www.facebook.com/your-facebook-profile/" className="text-gray-700 hover:text-blue-400">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" alt="Facebook" className="size-10" />
        </a>
        <a href="https://x.company/your-x-profile" className="text-gray-700 hover:text-blue-400">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" alt="X" className="size-10" />
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CardEx2