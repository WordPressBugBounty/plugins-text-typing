import React from 'react-dom';
import '../../bpl-tools/Admin/style.scss';
import App from './App';
import { dashboardInfo } from './utils/data';

document.addEventListener('DOMContentLoaded', () => {
  const adminEl = document.getElementById("ttbDashboard");
  const info = JSON.parse(adminEl.dataset.info);

  console.log("hello ami present");

  React.createRoot(adminEl).render(<App {...dashboardInfo(info)} />)

  adminEl.removeAttribute('data-info');
});