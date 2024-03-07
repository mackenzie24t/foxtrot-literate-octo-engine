$(function (){
  console.log("ready!");

  //   here is an array of objects. Each array item is an object.
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

 
  $.each(mySkills, (index, item) => {
    
    $('#skills').append("<li>" + item.skill + "</li>");
    

    
  })

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

 
  $.each(myAboutMe, (index, item) => {
    
    $('#aboutMe').append("<li>" + item.fact + "</li>");
    

    
  })
});
