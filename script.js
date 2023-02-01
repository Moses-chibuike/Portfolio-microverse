const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('.cancel');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.nav-mobile');
const works = document.querySelector('#Portfolio');
const width = window.innerWidth;
const isDesktop = width > 768;

const data = [
  {
    id: 0,
    name: 'Tonic',
    mainDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/Snapshoot1.png',
    desktopFeaturedImage: './images/Snap.png',
    technologies: [
      'html',
      'css',
      'javascript',
      'github',
      'Ruby on rails',
      'Bootstraps',
    ],
    stack: ['CANOPY', 'Back End Dev', 2015],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
    linkToLiveVersion: 'https://moses-chibuike.github.io/Portfolio-microverse/',
    linkToSource: 'https://github.com/Moses-chibuike/Portfolio-microverse',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    mainDescription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/Snapshoot2.png',
    desktopFeaturedImage: './images/Snap2.png',
    technologies: [
      'html',
      'css',
      'javascript',
      'github',
      'Ruby on rails',
      'Bootstraps',
    ],
    stack: ['FACEBOOK', 'Full Stack Dev', 2015],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
    linkToLiveVersion: 'https://moses-chibuike.github.io/Portfolio-microverse/',
    linkToSource: 'https://github.com/Moses-chibuike/Portfolio-microverse',
  },
  {
    id: 2,
    name: 'Facebook 360',
    mainDescription:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/Snapshoot3.png',
    desktopFeaturedImage: './images/Snap3.png',
    technologies: [
      'html',
      'css',
      'javascript',
      'github',
      'Ruby on rails',
      'Bootstraps',
    ],
    stack: ['FACEBOOK', 'Full Stack Dev', 2015],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
    linkToLiveVersion: 'https://moses-chibuike.github.io/Portfolio-microverse/',
    linkToSource: 'https://github.com/Moses-chibuike/Portfolio-microverse',
  },
  {
    id: 3,
    name: 'Uber Navigation',
    mainDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/Snapshoot4.png',
    desktopFeaturedImage: './images/Snap4.png',
    technologies: [
      'html',
      'css',
      'javascript',
      'github',
      'Ruby on rails',
      'Bootstraps',
    ],
    stack: ['Uber', 'Lead Developer', 2018],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
    linkToLiveVersion: 'https://moses-chibuike.github.io/Portfolio-microverse/',
    linkToSource: 'https://github.com/Moses-chibuike/Portfolio-microverse',
  },
];

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('show');
  body.classList.add('overflowHidden');
});
cancel.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  body.classList.remove('overflowHidden');
});

mobileLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    body.classList.remove('overflowHidden');
  });
});

const loadWorks = (data) => {
  let display = ' ';
  data.forEach(
    (
      {
        name,
        mainDescription,
        featuredImage,
        desktopFeaturedImage,
        technologies,
        stack,
        mobileStack,
      },
      i,
    ) => {
      display += `
      <div class="card-works works">
      <div class="image ">
        <img class="desktop-image" src= ${
  isDesktop ? desktopFeaturedImage : featuredImage
} alt="Project"/>
      </div>
      <div class="card">
        <h2>${name}</h2>
        <ul class="flex item-tag">
          ${
  isDesktop
    ? `<li class="icon-tag"><a class="canopy" href="#">${stack[0]}</a></li>`
    : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[0]}</a></li>`
}
          <li class="radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
          ${
  isDesktop
    ? `<li class="icon-tag"><a class="bend-yr bend" href="#">${stack[1]}</a></li>`
    : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[1]}</a></li>`
}
          <li class=" radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
          ${
  isDesktop
    ? `<li class="icon-tag"><a class="bend-yr"href="#">${stack[2]}</a></li>`
    : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[2]}</a></li>`
}
        </ul>
        <p class="p">
          ${mainDescription}
        </p>
        <div class="langbutton">
          <button>${technologies[0]}</button>
          <button>${technologies[4]}</button>
          <button>${technologies[1]}</button>
          ${isDesktop ? `<button>${technologies[2]}</button>` : ''}
        </div>
  
        <div class="div">
        <button type="submit" id="loadModal" value="${i}" onclick='loadModal(${i}) '  class="btn-modal btn">See Project</button>
        </div>
        </div>
      </div> `;
    },
  );
  works.innerHTML = display;
};

window.addEventListener('DOMContentLoaded', () => {
  loadWorks(data);

  const loadModalEle = document.querySelector('#loadModal');
  loadModalEle.addEventListener('click', () => {
  });
});