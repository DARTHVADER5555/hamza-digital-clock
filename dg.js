async function digitalClock() {
    const time = new Date();
  
    try {
      console.log(`Digital Clock: ${time}`);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      })
      digitalClock();
    } catch (error) {
      console.log(error);
    }
  }
  digitalClock();