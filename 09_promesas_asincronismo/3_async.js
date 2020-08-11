function resolveAfter1Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000);
  });
}
async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter1Seconds();
  console.log(result);
  // expected output: "resolved"
}
asyncCall() 


// async function requestHandler(req, res) {
//     try {
//       const user = await User.findById(req.userId);
//       const tasks = await Tasks.findById(user.tasksId);
//       tasks.completed = true;
//       await tasks.save();
//       res.send('Tasks Saved');
//     }
//     catch (e) {
//       res.send(e);
//     }
//   }