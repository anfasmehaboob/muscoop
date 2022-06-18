import React from "react";

interface Props {
  event: any;
}

export function FocusInputEl({ event }: Props) {
  if (event?.target?.nextElementSibling?.nodeName == "INPUT") {
    event.target.nextSibling.focus();
  } else {
    for (let i = 0; i < event.target.childNodes.length; i++) {
      const element = event.target.childNodes[i];
      if (element.nodeName == "INPUT") {
        element.focus();
      }
    }
  }
}


export function FocusSelectEl({ event }: Props) {
    console.log(event)
    if (event?.target?.childNodes[0]?.nodeName == "SELECT") {
        event?.target?.childNodes[0]?.addEventListener("mousedown",null)
       
    } 
  }
