import { FaRegFaceSmile, FaPaperclip } from "react-icons/fa6";
import styles from "./styles.module.scss";
import Button from "../Button";
import ChatCloud from "../ChatCloud";

const MESSAGES = [
  {
    id: 'sender-msg-1',
    message: 'Are you ready?',
    sender: true,
  },
  {
    id: 'receiver-msg-1',
    message: 'I have prepared everything',
    sender: false,
  },
  {
    id: 'sender-msg-2',
    message: 'Let\'s go girl!',
    sender: true,
  },
];

export default function ChatCard({ className }) {
  return (
    <div className={`${className} ${styles.container}`}>
      <h3>Ester Howard</h3>
      <div className={styles.chat_room}>
        {
          MESSAGES.map((m) => <ChatCloud key={m.id} message={m.message} isSender={m.sender} />)
        }
      </div>
      <div className={styles.chat_input}>
        <textarea placeholder="Type your message" name="chat" id="chat" cols="30" rows="10">
        </textarea>
        <div className={styles.chat_buttons}>
          <div className={styles.chat_attachment}>
            <FaRegFaceSmile className={styles.icon_button} size={16}/>
            <FaPaperclip className={styles.icon_button} size={16} />
          </div>
          <Button small placeholder="Send now" />
        </div>
      </div>
    </div>
  );
}