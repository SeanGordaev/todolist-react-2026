# To Do List (Project React - 2026)
> every day - day for learning

---

### Main:
I saw on YouTube that someone made a ToDo list in React, and I wanted to try it too . His website also seemed very pretty, so I want to try to make a good visualization.

---

### Web-Logic:
* Enter tasks from the user and add them when pressing the button "Add":
  * Stop from adding empty text -> the user must enter at least one letter or number .
* Delete specifically that task where the user presses the button "Del"
* Mark task as "done" that makes a line on the task text
* When user marks a task as "done", the text next to `input` shows how many tasks the user done.
* The color of the text about tasks and how much of them is done will change according to the user's progress. 

### Code-Logic:
* all components (apart app and index) creating in compnent `father` that has info about all user tasks. `father` creates context (`createContext()`) so all his childrens can check user's tasks and work with them.
* 

* All task is object that has three Properties:
```JavaScript
{
  id: number,
  text: string,
  done: boolean
}
```

---

### Visual:
* Input task and button for adding
* list (flex) of task from top to down
  * task have three elements: 
    1. Checkbox
    2. Text 
    3. Button (delete)
* label that show how much tasks you do from all your tasks (in proccess)
* Main Colors: `Blue`, `White` and `Light Blue`

### Photo From The Website:

<img src="./images/imgfromweb.png" alt="Alt text" width="700" />


--- 

#### brean Storm:
- progress bar ?
  - visulation of that how much task you have to do - X 
  - change color text according to user progress - V
- animation of creating - V
- add saving task also after page's update and exit from page - ?
  - learn backend?
  - localStorag?