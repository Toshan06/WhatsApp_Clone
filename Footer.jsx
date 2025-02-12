import React from "react";
//import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-40">
      <div className="max-w-6xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1">
        <div className="flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
          </svg>
          <h2 className="text-2xl font-semibold py-2.5 items-center gap-2">
            <p>WhatsApp</p>
          </h2>
        </div>
        
        <div>
          <h3 className="font-light text-xs mb-2 pb-5">What we do</h3>
          <ul className="text-lg space-y-2">
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/stayconnected">Features</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://blog.whatsapp.com/">Blog</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/security">Security</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://business.whatsapp.com/">For Business</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-light text-xs mb-2 pb-5">Who we are</h3>
          <ul className="text-lg space-y-2">
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/about">About Us</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/join">Careers</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/join">Brand Center</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/privacy">Privacy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-light text-xs mb-2 pb-5">Use WhatsApp</h3>
          <ul className="text-lg space-y-2">
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/android">Android</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/download">iPhone</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/download">Mac/PC</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://web.whatsapp.com/">WhatsApp Web</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-light text-xs mb-2 pb-5">Need help?</h3>
          <ul className="text-lg space-y-2">
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/contact">Contact Us</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://faq.whatsapp.com/">Help Center</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/download">Apps</a>
            </li>
            <li className="hover:underline hover:decoration-stone-50 hover:decoration-[0.1rem]">
              <a href="https://www.whatsapp.com/security/advisories">Security Advisories</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 border-t border-gray-700 pt-6 gap-10 flex justify-center items-center md:flex-row justify-start items-center">
        <p className="text-sm">2025 &copy; WhatsApp<br></br>LLC</p>
        <p className="text-sm">
          <a href="https://www.whatsapp.com/legal/">Terms and Privacy<br></br>Policy</a>
        </p>
        <p className="text-sm">
          <a href="https://www.whatsapp.com/sitemap">Sitemap</a>
        </p>
        
        <a href="https://x.com/whatsapp?mx=2" className="border-2 border-white rounded-full p-2 hover:bg-green-400 hover:text-white hover:border-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M 17.476562 2.9902344 A 1.0001 1.0001 0 0 0 16.724609 3.3691406 L 12.509766 8.5546875 L 9.0566406 3.7714844 C 8.7066406 3.2874844 8.1458281 3 7.5488281 3 L 4.078125 3 C 3.420125 3 3.0388281 3.7462969 3.4238281 4.2792969 L 9.3339844 12.462891 L 3.7246094 19.369141 A 1.0001 1.0001 0 1 0 5.2753906 20.630859 L 10.548828 14.142578 L 14.943359 20.228516 C 15.293359 20.712516 15.854172 21 16.451172 21 L 19.921875 21 C 20.579875 21 20.961172 20.253703 20.576172 19.720703 L 13.724609 10.232422 L 18.275391 4.6308594 A 1.0001 1.0001 0 0 0 17.476562 2.9902344 z M 6.4101562 5 L 7.4765625 5 L 17.587891 19 L 16.523438 19 L 6.4101562 5 z"></path>
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UCAuerig2N-RZWJT8x75V9yw" className="border-2 border-white rounded-full p-2 hover:bg-green-400 hover:text-white hover:border-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/whatsapp/" className="border-2 border-white rounded-full p-2 hover:bg-green-400 hover:text-white hover:border-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
          </svg>
        </a>
        <a href="https://www.facebook.com/whatsapp" className="rounded-full hover:bg-green-400 hover:text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="57" height="57" viewBox="0 0 24 24" fill="white">
            <path d="M 12 2.0078125 C 6.477 2.0078125 2 6.4848125 2 12.007812 C 2 17.530812 6.477 22.007812 12 22.007812 C 17.523 22.007812 22 17.530812 22 12.007812 C 22 6.4858125 17.523 2.0078125 12 2.0078125 z M 12 3.0078125 C 16.963 3.0078125 21 7.0448125 21 12.007812 C 21 16.969499 16.965102 21.005676 12.003906 21.007812 L 12.003906 13.001953 L 15.5 13 A 0.50005 0.50005 0 1 0 15.5 12 L 12.003906 12.001953 L 12.003906 10.503906 C 12.003906 9.6688915 12.668891 9.0039063 13.503906 9.0039062 L 15.5 9.0039062 A 0.50005 0.50005 0 1 0 15.5 8.0039062 L 13.503906 8.0039062 C 12.128921 8.0039062 11.003906 9.1289216 11.003906 10.503906 L 11.003906 12.001953 L 9.5 12.001953 A 0.50005 0.50005 0 1 0 9.5 13.001953 L 11.003906 13.001953 L 11.003906 20.949219 C 6.5080188 20.452022 3 16.634151 3 12.007812 C 3 7.0448125 7.037 3.0078125 12 3.0078125 z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
}
