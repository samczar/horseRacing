import axios from "axios";

const url = (protocol: string, hostname: string, port: string) => {
  return `${protocol}//${hostname}:${port}`;
};
const base = url(
  window.location.protocol,
  window.location.hostname,
  window.location.port
);

export const baseLink: any = axios.create({
  baseURL: base
});
