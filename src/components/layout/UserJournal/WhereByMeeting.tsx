import React from "react";
import styled from "styled-components";


const IframeContainer=styled("iframe")<any>`
width: 90%;
height: 700px;
margin-top:15px;
padding:10px;
`


export const WhereByMeeting = () => {
  return (
    <IframeContainer src="https://demothworks.whereby.com/b84de800-4fd7-485d-af2b-50445191041d?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiI1MjcwNTEwOCIsInJvb21SZWZlcmVuY2UiOnsicm9vbU5hbWUiOiIvYjg0ZGU4MDAtNGZkNy00ODVkLWFmMmItNTA0NDUxOTEwNDFkIiwib3JnYW5pemF0aW9uSWQiOiIxNTUyMjAifSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5zcnYud2hlcmVieS5jb20iLCJpYXQiOjE2NDY5MTM2ODgsInJvb21LZXlUeXBlIjoibWVldGluZ0hvc3QifQ.LfrwW5vig-YGQXa9xf5EXXgX9xiyZmmd1XFj0QH1ifE"
        allow="camera; microphone; fullscreen; speaker; display-capture">
        </IframeContainer>

  );
};
