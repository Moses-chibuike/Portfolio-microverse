const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('.cancel');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.nav-mobile');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const cancelsModal = document.querySelector('.cancels');
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    desktopDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
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

const openModal = ({
  name,
  description,
  desktopDescription,
  featuredImage,
  desktopFeaturedImage,
  technologies,
  stack,
  mobileStack,
  linkToLiveVersion,
  linkToSource,
}) => {
  let display = '';
  modal.classList.add('showModal');
  display += `
  <div>
  <h2 class="modal-h2">${name}</h2>
  <ul class="flex item-tag-modal item-tag">
    
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
  <div class="image img-modal ">
    <img src=${isDesktop ? desktopFeaturedImage : featuredImage} alt="Project"/>
  </div>
  <div class="flex-modal">
    <p class="p p-modal">
     ${isDesktop ? desktopDescription : description}
    </p>
    
    <div class="langbutton langbutton-modal">
    <div class= "modal-btn">
      <button>${technologies[0]}</button>
      <button>${technologies[1]}</button>
      <button>${technologies[2]}</button>
      ${isDesktop ? `<button>${technologies[3]}</button>` : ''}
      ${isDesktop ? `<button>${technologies[4]}</button>` : ''}
      ${isDesktop ? `<button>${technologies[5]}</button>` : ''}
    </div>
      <hr class="modal-new">
      
      <div class="popup-buttons flex div">
      
      <a href=${linkToLiveVersion} target= "_blank" class="btn-modal btn">See Live <img src="./images/IconModal.png" alt="Live Icon " /></a>
        <a href=${linkToSource} target= "_blank" class="btn-modal btn">See Source <img src="./images/VectorModal.png" alt="Source Icon" /></a>
    </div>
    
    </div>
    </div>
</div>
</section>`;
  modalInner.innerHTML = display;
};

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

const loadModal = (i) => {
  const singleData = data.find((item) => item.id === i);
  openModal(singleData);
};

cancelsModal.addEventListener('click', () => {
  modal.classList.remove('showModal');
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
    loadModal(loadModalEle.value);
  });
});

const form = document.querySelector('form');
const alertMsg = document.querySelector('small');
form.addEventListener('submit', (event) => {
  const email = document.querySelector('.email-area');
  const emailRegExp = /[A-Z]/;
  if (!emailRegExp.test(email.value)) {
    form.submit();
  } else {
    event.preventDefault();
    alertMsg.innerText = 'Please Enter Your Email Only In Lower Case';
  }
});

// storage sum
const sum = {};
document.addEventListener('keyup', () => {
  sum.name = document.querySelector('.name-area').value;
  sum.email = document.querySelector('.email-area').value;
  sum.text = document.querySelector('.text-area').value;
  const sumdata = JSON.stringify(sum);
  localStorage.setItem('sum', sumdata);
});

const setItem = () => {
  const moses = JSON.parse(localStorage.getItem('sum'));
  const declar = document.querySelector('.name-area');
  const declarr = document.querySelector('.email-area');
  const declarrr = document.querySelector('.text-area');
  declar.value = moses.name;
  declarr.value = moses.email;
  declarrr.value = moses.text;
};

window.onload = setItem;
