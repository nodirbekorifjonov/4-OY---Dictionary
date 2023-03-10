import "./main";
const wordContent = document.querySelector(".word");

export const findWord = (words) => {
  console.log(words);

  wordContent.innerHTML = `
  <div class="word__header mb-[4rem] flex justify-between items-center">
  <div class="word__title">
    <h1 class="text-[6.4rem] font-bold mb-[8px]">${words[0].word}</h1>
    <p class="text-[2.4rem] text-[#A445ED]">${words[0].phonetics[1].text}</p>
  </div>
  <div
    class="word__play w-[7.5rem] h-[7.5rem] bg-[rgba(164,69,237,0.25)] rounded-full flex justify-center items-center cursor-pointer"
  >
    <svg
      class="select-none"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="none"
    >
      <path
        class="word__play-ico"
        fill="#A445ED"
        fill-rule="evenodd"
        d="M0 0v21l21-10.5L0 0Z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</div>

<!-- NOUN -->
<div class="noun mb-[4rem]">
  <div class="noun__title flex items-center justify-center mb-[4rem]">
    <h2
      class="text-[2.4rem] font-bold leading-[1.2] italic mr-[2rem]"
    >
      ${words[0].meanings[0].partOfSpeech}
    </h2>
    <div class="main__line h-[1px] w-full bg-[#E9E9E9]"></div>
  </div>
  <div class="meaning mb-[6.4rem]">
    <h2
      class="text-[2rem] leading-[1.2] font-normal text-[#757575] mb-[2.5rem]"
    >
      Meaning
    </h2>
    <ul
      class="meaning__list list-disc text-[#8F19E8] text-[1.8rem] font-normal leading-[1.3] flex flex-col gap-[1.3rem] pl-[4.4rem]"
    >
      <li class="meaning__item">
        <span class="text-[#2d2d2d] dark:text-[#FFFFFF]"
          >${
            words[0].meanings[0].definitions[0].definition
              ? words[0].meanings[0].definitions[0].definition
              : ""
          }</span
        >
      </li>
    </ul>
  </div>
  <div class="synonyms flex items-center gap-[2.2rem]">
    <h2 class="text-[2rem] leading-[1.2] font-normal text-[#757575]">
      Synonyms
    </h2>

    <div class="synonyms__wrapper flex flex-wrap gap-[3px]">
    ${
      words[0].meanings[0].synonyms
        ? words[0].meanings[0].synonyms.map((synonym) => {
            return `
          <a class="text-[#A445ED] text-[2rem] font-bold leading-[1.2] hover:underline" id="synonymLink" onclick='() => {
            searchForm.search.value = synonymLink.textContent;
          }' href="#">${synonym}</a>`;
          })
        : "No Synonyms"
    }</div>
    
  </div>
</div>
<!-- VERB -->
<div class="verb mb-[4rem]">
  <div class="verb__title flex items-center justify-center mb-[4rem]">
    <h2
      class="text-[2.4rem] font-bold leading-[1.2] italic mr-[2rem]"
    >
      ${words[0].meanings[1].partOfSpeech}
    </h2>
    <div class="main__line h-[1px] w-full bg-[#E9E9E9]"></div>
  </div>
  <div class="meaning mb-[6.4rem]">
    <h2
      class="text-[2rem] leading-[1.2] font-normal text-[#757575] mb-[2.5rem]"
    >
      Meaning
    </h2>
    <ul
      class="meaning__list list-disc text-[#8F19E8] text-[1.8rem] font-normal leading-[1.3] flex flex-col gap-[1.3rem] pl-[4.4rem]"
    >
      <li class="meaning__item">
        <span class="text-[#2d2d2d] dark:text-[#ffffff] mb-[1.3rem]"
          >${
            words[0].meanings[1].definitions[0].definition
              ? words[0].meanings[1].definitions[0].definition
              : ""
          }</span
        >
        <span class="text-[#757575] block">
        ${
          words[0].meanings[1].definitions[0].example
            ? words[0].meanings[1].definitions[0].example
            : ""
        }
        </span>
      </li>
    </ul>
  </div>
</div>

<div class="main__line  mb-[1.9rem] w-full h-[1px] bg-[#E9E9E9]"></div>

<div class="footer pb-[5.8rem]">
      <div class="container flex gap-[2rem]">
        <h2
          class="text-[1.4rem] font-normal leading-[1.2] text-[#757575] underline"
        >
          Source
        </h2>
        <a
          class="footer__link text-[1.4rem] font-normal underline flex gap-[9px]"
          href="${words[0].sourceUrls}" target="_blank"
          >${words[0].sourceUrls}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#757575" d="M6.09 4.295a.75.75 0 0 0 0-1.5v1.5Zm-4.664-.324.53.53-.53-.53Zm0 8.603.53-.53-.53.53Zm9.778-4.665a.75.75 0 1 0-1.5 0h1.5Zm-6.37.197a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm8.333-6.212a.75.75 0 1 0-1.061-1.06l1.06 1.06Zm-.53.22a.75.75 0 0 0 0-1.5v1.5ZM9 .614a.75.75 0 0 0 0 1.5v-1.5Zm4.386.75a.75.75 0 0 0-1.5 0h1.5ZM11.886 5a.75.75 0 1 0 1.5 0h-1.5ZM6.091 2.795H2.455v1.5H6.09v-1.5Zm-3.636 0c-.585 0-1.146.233-1.56.646l1.061 1.06a.704.704 0 0 1 .499-.206v-1.5Zm-1.56.646A2.204 2.204 0 0 0 .25 5h1.5c0-.187.074-.366.206-.498l-1.06-1.06ZM.25 5v6.546h1.5V5H.25Zm0 6.546c0 .584.232 1.145.646 1.558l1.06-1.06a.705.705 0 0 1-.206-.498H.25Zm.646 1.558c.413.414.974.646 1.559.646v-1.5a.705.705 0 0 1-.499-.206l-1.06 1.06Zm1.559.646H9v-1.5H2.455v1.5Zm6.545 0c.585 0 1.145-.232 1.559-.646l-1.06-1.06A.704.704 0 0 1 9 12.25v1.5Zm1.559-.646c.413-.413.646-.974.646-1.558h-1.5a.704.704 0 0 1-.207.498l1.06 1.06Zm.646-1.558V7.909h-1.5v3.637h1.5Zm-5.311-2.38 7.273-7.272-1.061-1.06-7.273 7.272 1.061 1.06ZM12.636.615H9v1.5h3.636v-1.5Zm-.75.75V5h1.5V1.364h-1.5Z"/></svg></a>
      </div>
    </div>

  `;
  //   wordContent.textContent = "heloooo";
};
