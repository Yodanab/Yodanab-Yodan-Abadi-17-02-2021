import React from "react";
import { connect } from "react-redux";
import { AlertBox } from "./myAlert.style";

const MyAlert = ({ view, content, style }) => {
  return view && <AlertBox color={style}>{content}</AlertBox>;
};

const mapStateToProps = (state) => ({
  view: state.alert.view,
  content: state.alert.content,
  style: state.alert.style,
});

export default connect(mapStateToProps)(MyAlert);
