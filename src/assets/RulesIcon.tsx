type Props = {
  color: string;
  width: string;
};

const RulesIcon = ({ color, width }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "19.028"}
      viewBox="0 0 19 21"
    >
      <g data-name="Group 12837">
        <path
          data-name="Path 17409"
          d="M5.5 4.25a.75.75 0 0 1 .75-.75H12V8a2 2 0 0 0 2 2h4.5v9.75a.75.75 0 0 1-.75.75H13V22h4.75A2.25 2.25 0 0 0 20 19.75V9.664a1.75 1.75 0 0 0-.513-1.237l-5.914-5.914A1.75 1.75 0 0 0 12.336 2H6.25A2.25 2.25 0 0 0 4 4.25V12h1.5zm8 3.75V4.561L17.439 8.5H14a.5.5 0 0 1-.5-.5z"
          style={{ fill: color || "#8d8d8d" }}
          transform="translate(-1 -2)"
        />
        <path
          data-name="Path 17410"
          d="M4.5 13.75a.75.75 0 0 1-.75.75H2.5v7h1.25a.75.75 0 0 1 0 1.5H2.5A1.5 1.5 0 0 1 1 21.5v-7A1.5 1.5 0 0 1 2.5 13h1.25a.75.75 0 0 1 .75.75z"
          style={{ fill: color || "#8d8d8d" }}
          transform="translate(-1 -2)"
        />
        <path
          data-name="Path 17411"
          d="M9.25 14.5a.75.75 0 0 1 0-1.5h1.25a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H9.25a.75.75 0 0 1 0-1.5h1.25v-7z"
          style={{ fill: color || "#8d8d8d" }}
          transform="translate(-1 -2)"
        />
        <path
          data-name="Path 17412"
          d="M6.5 16.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75z"
          style={{ fill: color || "#8d8d8d" }}
          transform="translate(-1 -2)"
        />
        <path
          data-name="Path 17413"
          d="M6.5 16a.75.75 0 1 0-.75-.75.75.75 0 0 0 .75.75z"
          style={{ fill: color || "#8d8d8d" }}
          transform="translate(-1 -2)"
        />
      </g>
    </svg>
  );
};

export default RulesIcon;
