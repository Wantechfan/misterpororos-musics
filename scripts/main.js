try {
  Events.on(ClientLoadEvent, e => {
    const myVariable1 = Vars.tree.loadMusic("dark1")
    // const myVariable2 = Vars.tree.loadMusic("[Your second music file name in musics folder]") <= remove the // and this comment if you want 2nd music.
    // repeat if you have 3rd music, 4th, etc.

    Vars.control.sound.darkMusic.add(myVariable1);
    // Vars.control.sound.ambientMusic.addAll([place myVariable shits here if you want the music to play when you're attacking a sector]);
    // Vars.control.sound.bossMusic.addAll([place myVariable shits here if you want the music to play when a guardian spawns]);
  });
} catch(e) {
  log.info("Either your script is bugged or you don't wanna use js for this. Anyways, log error: [red]" + e)
}

// Replace the [text] with whatever tf it's describing.
