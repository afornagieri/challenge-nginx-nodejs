--
-- Name: challenge; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE challenge WITH ENCODING = 'UTF8';


ALTER DATABASE challenge OWNER TO postgres;

\connect challenge

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--
-- Name: names; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.names (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.names OWNER TO postgres;

--
-- Name: names_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.names_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.names_id_seq OWNER TO postgres;

--
-- Name: names_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.names_id_seq OWNED BY public.names.id;


--
-- Name: names id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.names ALTER COLUMN id SET DEFAULT nextval('public.names_id_seq'::regclass);


--
-- Data for Name: names; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.names (id, name) FROM stdin;
1	Artur
2	João
3	Maria
\.


--
-- Name: names_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.names_id_seq', 3, true);


--
-- Name: names names_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.names
    ADD CONSTRAINT names_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--