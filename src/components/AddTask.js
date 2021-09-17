import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("请新增待办事项");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  const dayTime = new Date(Date.now()).toISOString().split("T")[0];

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>任务</label>
        <input
          type="text"
          placeholder="待办事项"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>日期与时间</label>
        <input
          type="text"
          placeholder={dayTime}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>设置提醒</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="保存任务" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
