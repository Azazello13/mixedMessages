const part1 = [
    "Mum",
    "Anna",
    "Emil",
    "Nina",
    "Tim",
    "Dad",
    "Lulu",
    "Karamel",
    "Kuki",
    "Meeri"
  ];
  
  const part2 = [
    "How are you today?",
    "When are we going to take a walk?",
    "Nice weather today, isn't it?",
    "Christmas will be soon!",
    "COVID is stupid!",
    "Santa Claus will arrive tomorrow!",
    "I can't of anything else to tell you!"
  ];
  
  const part3 = [
    "Au revoir",
    "See you soon",
    "Bye bye",
    "See you later",
    "Love you"
  ];
  
  select = (part) => part[Math.floor(Math.random() * part.length)]
  
  generate = () => `Hi ${select(part1)}. ${select(part2)} ${select(part3)}!`
  
  console.log(generate());
  