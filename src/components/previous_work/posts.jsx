import { useState,useEffect } from 'react';
import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

const ScaledImage = ({ children }) => {
	return (
		<LazyLoad height={'100%'}>
		<Row classname='d-flex justify-content-center'>
			<Col className='d-flex justify-content-center'>
				<div class='w-75 justify-content-center d-flex'>{children}</div>
			</Col>
		</Row>
		</LazyLoad>
	);
}

function createContent() {
	const torizon = require('../../static/previous_work/torizon.jpg');
	const taesa = require('../../static/previous_work/taesa.png');
	const c_screen_1 = require('../../static/previous_work/c_screen_1.jpg');
	const c_screen_2 = require('../../static/previous_work/c_screen_2.jpg');
	const circuito_completo = require('../../static/previous_work/circuito_completo_inverso.png');
	const cbeb_setup_completo = require('../../static/previous_work/cbeb_setup_completo.png');
	const front = require('../../static/previous_work/front.jpg');
	const bottom = require('../../static/previous_work/bottom.jpg');
	const front_datalogger = require('../../static/previous_work/front_datalogger.jpg');
	const bottom_datalogger = require('../../static/previous_work/bottom_datalogger.jpg');
	const inpe = require('../../static/previous_work/inpe.png');
	const cubesat = require('../../static/previous_work/Cubesat.JPG');
	const equipe = require('../../static/previous_work/Equipe.JPG');
	const hfss = require('../../static/previous_work/hfss.jpg');
	const ecg_3channel = require('../../static/previous_work/ECG_3channel.jpg');
	const _interface = require('../../static/previous_work/interface.png');
	const sistema_medida = require('../../static/previous_work/sistema_medida.png');
	const labview = require('../../static/previous_work/labview.png');

	return [
		{
			Title: 'Python containers in low profile hardware',
			Meta: '2022',
			Text: <>
			<Row style={{'text-align':'justify'}}>
			<p>Docker containers always come in handy, when they're properly configured. In this project, a custom Linux image distributed by Toradex was used for a <b>Wi-SUN</b> IoT network gateway hardware. The best part about setting up this system is the possibility to run the application on docker containers, making the job enormously easier.</p>
			<p>Three python applications were configured through docker-compose: (1) A <b>RESTFull API with Flask and SQLAlchemy library</b> for local database access; (2) a radio network controller, responsible for reception and transmittion of data via ttyUSB0 serial interface; and finally, (3) scheaduler, requesting and posting data to the server.</p>
			<p>The image below shows the gateway hardware on the top, the radio module on bottom left and the IoT sensor device on bottom right.</p>
			<ScaledImage>
				<Figure><Figure.Image src={String(torizon)} /></Figure>
			</ScaledImage>
			</Row>
			</>
		},
		{
			Title: 'IoT network and its architecture',
			Meta: '2021',
			Text: <>
			<Row style={{'text-align':'justify'}}>
			<p>In this project, IoT devices were projected to be installed in cable-stayed power transmission lines for variable measurement and fail prediction. The IoT devices connected each other through a WiSUN-FAN mesh network and all gathered data was collected in an embedded Linux gateway. The gateway sent all data to a processing server.</p>
			<p>I was responsible for designing the software <b>system architecture</b>, modeling the data structs for the <b>Postgres</b> and SQLite databases, configuring <b>Docker</b> containers and the development of all the Python scripts, including the gateway and the server side.</p>
			<p>Technologies that I was working on: Docker, Python, Python, SQLAlchemy, Postgres, PySerial and embedded Linux sysadmin procedures.</p>
			<Figure><Figure.Image src={String(taesa)} /></Figure>
			</Row>
			</>
		},
		{
			Title: 'C++ cross-compile UI interface',
			Meta: '2021',
			Text: <>
			<Row style={{'text-align':'justify'}}>
			<p>At the beginning of a project for IoT power transmission lines monitoring, there was a need for UI implementation in a embedded custom linux controller. At that time, the Linux Engineer of our team still hadn't built the environment for <b>PyQT5</b> and other Python packages development.</p>
			<p>So, my job was to fill that gap and work with what I had available: to build binaries that control the display framebuffer device. I built the following <b>UI interfaces with a cross-compiling C++ code for armv7 architecture</b>. The program wrote pixels directly to the device framebuffer, showing gathered IoT data on the display.</p>
			<p>It was hard work, but I learned how to cross-compile programs and write <b>Makefile files</b> for compiling automation.</p>
			<ScaledImage>
				<Figure><Figure.Image src={String(c_screen_1)} /></Figure>
			</ScaledImage>
			<ScaledImage>
				<Figure><Figure.Image src={String(c_screen_2)} /></Figure>
			</ScaledImage>
			</Row>
			</>
		},
		{
			Title: 'My first experience as a teacher',
			Meta: '2020',
			Text: <>
			<Row style={{'text-align':'justify'}}><p>Just before all the chaos that the COVID-19 pandemic brought to the world, in January 2020 I had the opportunity and the privilege to <b>lead a summer course of basic electronics lab II class</b>. The experience was complete: I had to elaborate the activity scripts, teach the theoretical classes and monitor the students practical development. The circuit in question that the students had to develop was an <b>ECG signal generator</b>, as well as a circuit for its processing. The complete circuit is shown in the image below.</p>
			<Col className="justify-content-center"><Figure><Figure.Image src={String(circuito_completo)} /></Figure></Col>
			<p>The students had to weld components of the warehouse in a punctured phenolite plate, composing the following circuits with operational amplifiers:</p>
			<ul>
				<li>DAC 8 bits;</li>
				<li>Inverter adder;</li>
				<li>Instrumentation amplifier;</li>
				<li>Sallen-key filter;</li>
			</ul>
			<p>The image below shows one of the working circuits and the result seen on the oscilloscope</p>
			<Figure><Figure.Image src={String(cbeb_setup_completo)} /></Figure>
			</Row>
			</>
		},
		{
			Title: 'Water meter IoT device',
			Meta: '2019',
			Text: <>
			<Row style={{'text-align':'justify'}}>
			<p>The circuit that I will show below is one of the products of my <b>masters dissertation</b>. In it I am using a microcontroller <b>NRF51822</b> for the sensing of a hydrometer and communication of telemetry data via <b>Bluetooth Low-Energy (BLE)</b>.</p>
			<p>The circuit had to sample voltage signals acquired through an optical sensor, using a low-power comparator. The telemetry data was saved in an <b>EEPROM memory</b>, via the <b>I2C interface</b>, and also sent via BLE.</p>
			<p>The biggest challenge of the project was to develop this entire circuit using the harvest of solar energy as an energy source. An energy management circuit had to be developed, which was able to capture energy and store it in a <b>supercapacitor</b>, as well as firmware programming routines and practices were adapted to lower energy consumption.</p>
			<p>The images below show the front and bottom circuit layers of the IoT device that was built.</p>
			<ScaledImage><Figure><Figure.Image src={String(front)} /></Figure></ScaledImage>
			<ScaledImage><Figure><Figure.Image src={String(bottom)} /></Figure></ScaledImage>
			</Row>
			</>
		},
		{
			Title: 'Low-power datalogger',
			Meta: '2019',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>It was necessary to develop a low consumption datalogger circuit to perform some measurements on my IoT telemetry device in an external environment, developed during the masters degree.</p>
			<p>The same microcontroller as the telemetry device, <b>NRF51822</b>, was used to sample voltage levels and store them in flash memory using the <b>SPI interface</b>. For this purpose, an analog conditioning circuit was developed, with operational amplifiers, to limit the bandwidth of the sampled voltage signal.</p>
			<p>The images below show the top and bottom sides of the developed circuit.</p>
			<ScaledImage><Figure><Figure.Image src={String(front_datalogger)} /></Figure></ScaledImage>
			<ScaledImage><Figure><Figure.Image src={String(bottom_datalogger)} /></Figure></ScaledImage>>
			</Row>
		},
		{
			Title: <>Winner of the 2<sup>nd</sup> CubeDesign! Cubsat project</>,
			Meta: '2019',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>I had the opportunity to visit one of the most renowned research centers in Brazil, the <b>National Institute for Space Research (INPE)</b>. In the photo below, here we are at the main lab with the <b>largest vacuum chamber in Latin America!</b></p>
			<ScaledImage><Figure><Figure.Image src={String(inpe)} /></Figure></ScaledImage>
			<p>I came to visit the laboratory with my space-modeling team that I was a part of at Unicamp. Our team signed up for the Cubesats (mini satellites) development competition at INPE. In this project, I was responsible for the development of Cubesats orientation algorithm, using solar panels. We used <b>STM32F103 microcontrollers</b> to process the data on the device, which I had to develop part of the logic and firmware. The image below shows the ready Cubsat.</p>
			<ScaledImage><Figure><Figure.Image src={String(cubesat)} /></Figure></ScaledImage>
			<p>Our Cubesat was subjected to a series of tests, including sensor telemetry, control of a reaction wheel and antenna ejection. <b>Our team demonstrated the best results</b> and we got the first place. Below shows a very proud team receiving our awards.</p>
			<ScaledImage><Figure><Figure.Image src={String(equipe)} /></Figure></ScaledImage>
			</Row>
		},
		{
			Title: 'RF power splitter simulation on HFSS',
			Meta: '2018',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>During one of my post-graduation semesters, one of my subjects was "guidance and radiation of RF waves". In this period I was able to better understand the phenomena of RF signals. I got in touch with computational tools for high frequency simulation, like <b>CST</b> and <b>HFSS</b>, and designed some devices, like passive filters, waveguides and a Wilkinson power splitter. The image below shows a power splitter that was simulated using the HFSS.</p>
			<ScaledImage><Figure><Figure.Image src={String(hfss)} /></Figure></ScaledImage>
			</Row>
		},
		{
			Title: '3 channel ECG circuit and computer interface',
			Meta: '2017',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>My final undergraduate work in electronic engineering was the development of an <b>electrocardiograph circuit</b> capable of capturing 3 ECG leads.</p>
			<p>In this work, I designed the entire analog and digital circuit for conditioning and digitizing the signals. I also had to develop the firmware for the <b>Atmega328 microcontroller</b>, which communicated via the UART interface with a computer. In turn, the graphical interface, that I programmed in C++ using the <b>Qt library</b>, received the data and showed it on the computer monitor.</p>
			<p>The images below show the manually prototyped circuit and the graphical interface showing the signals.</p>
			<ScaledImage><Figure><Figure.Image src={String(ecg_3channel)} /></Figure></ScaledImage>
			<ScaledImage><Figure><Figure.Image src={String(_interface)} /></Figure></ScaledImage>
			</Row>
		},
		{
			Title: 'DAC and ADC controlling plataform',
			Meta: '2017',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>Towards the end of my undergrad studies I did a scientific initiation. As a product of my work, I designed an electronic device to send and receive analog and digital signals. The circuit consisted of an <b>Atmega328 microcontroller</b> and an <b>IC DAC</b>, whose communication was established via the SPI interface. The circuit was designed using <b>EDA Kicad</b> software and <b>manufactured industrially</b>. The image below shows the final result.</p>
			<ScaledImage><Figure><Figure.Image src={String(sistema_medida)} /></Figure></ScaledImage>
			<p>For the control of the device, I developed an <b>HMI in LabVIEW language</b>, whose function was to send and receive commands via the UART interface. The images below shows the control interface.</p>
			<ScaledImage><Figure><Figure.Image src={String(labview)} /></Figure></ScaledImage>
			</Row>
		}
	];
}

export const Posts = () => {
	let postsContent = createContent();

	const content = postsContent.map((item) =>
		<Row>
			<Col xs={12} className='d-flex justify-content-left mt-5' >
				<h4>{item.Title}</h4>
			</Col>
			<Col>
				<p class="text-muted"><i>{item.Meta}</i></p>
			</Col>
			<Col xs={12} className='d-flex justify-content-left mt-2' >
				{item.Text}
			</Col>
		</Row>
	);

	return (
		<Container fluid>
			<Row className='d-flex justify-content-center'>
				<Col xs={12} md={7} lg={6} xl={5} xxl={4}>
					{content}
				</Col>
			</Row>
		</Container>
	);
}
