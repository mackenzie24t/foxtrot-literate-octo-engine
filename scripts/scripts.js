$(function (){
  console.log("ready!");

  //   here is an array of my skills. Each array item is an object
  const mySkills = [
    {
      skill: "Moving projects from vsCode to Github.",
    },
    {
      skill: "DevSpeak: 'bang, splat, whack'",
      },
    {
      skill: "Keyboard shortcuts: 'alt tab, ctrl t, ctrl r, ctrl s, ctrl tab, ctrl +/- , ctrl + click'",
    },
    {
      skill: "General housekeeping",
    },
    {
      skill: "Enhance",
    },
    {
      skill: "Link directly to code",
    }
  ];

 // function that cycles through all items in mySkills and prints them as an unordered list
  $.each(mySkills, (index, item) => {
    
    $('#skills').append("<li>" + item.skill + "</li>");
  })

  //   here is an array of facts about me. Each array item is an object
  const myAboutMe = [
    {
      fact: "I am a junior IT major with a concentration in software development",
    },
    {
      fact: "I love movies, especially horror and thrillers",
    },
    {
      fact: "I really enjoy keeping houseplants and fish",
    },
    {
      fact: "I have 2 planted aquariums: 1 with a betta named Udon, and 1 with cherry shrimp",
    },
    {
      fact: "I have a brother. He is an occupational health science freshman",
    }
  ];

 // function that cycles through all items in myAboutMe and prints them as an unordered list
  $.each(myAboutMe, (index, item) => {
    
    $('#aboutMe').append("<li>" + item.fact + "</li>");
  })
});
