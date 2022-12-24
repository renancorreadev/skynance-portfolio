interface ProgressBarProps {
  bgcolor: string;
  completed: number;
}
export const ProgressBar = ({bgcolor, completed}: ProgressBarProps ) => {

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 20
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    alignItems: 'right',
  }

  const labelStyles = {
    padding: 20,
    color: '#000',
    fontWeight: 'bold',
    fontSize: '15px'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}% `}</span>
      </div>
    </div>
  );
};

