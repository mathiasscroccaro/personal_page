import { useState,useEffect } from 'react';
import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';

const ScaledImage = ({ children }) => {
	return (
		<Row classname='d-flex justify-content-center'>
			<Col className='d-flex justify-content-center'>
				<div class='w-75 justify-content-center d-flex'>{children}</div>
			</Col>
		</Row>
	);
}

function createContent() {
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
			Title: 'My first experience as a teacher',
			Text: <>
			<Row style={{'text-align':'justify'}}><p>Just before all the chaos that the COVID-19 pandemic brought to the world, in January 2020 I had the opportunity and the privilege to lead a summer course of basic electronics lab II class. The experience was complete: I had to elaborate the activity scripts, teach the theoretical classes and monitor the students practical development. The circuit in question that the students had to develop was an ECG signal generator, as well as a circuit for its processing. The complete circuit is shown in the image below.</p>
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
			Text: <>
			<Row style={{'text-align':'justify'}}>
			<p>The circuit that I will show below is one of the products of my masters dissertation. In it I am using a microcontroller NRF51822 for the sensing of a hydrometer and communication of telemetry data via Bluetooth Low-Energy (BLE).</p>
			<p>The circuit had to sample voltage signals acquired through an optical sensor, using a low-power comparator. The telemetry data was saved in an EEPROM memory, via the I2C interface, and also sent via BLE.</p>
			<p>The biggest challenge of the project was to develop this entire circuit using the harvest of solar energy as an energy source. An energy management circuit had to be developed, which was able to capture energy and store it in a supercapacitor, as well as firmware programming routines and practices were adapted to lower energy consumption.</p>
			<p>The images below show the front and bottom circuit layers of the IoT device that was built.</p>
			<ScaledImage><Figure><Figure.Image src={String(front)} /></Figure></ScaledImage>
			<ScaledImage><Figure><Figure.Image src={String(bottom)} /></Figure></ScaledImage>
			</Row>
			</>
		},
		{
			Title: 'Low-power datalogger',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>It was necessary to develop a low consumption datalogger circuit to perform some measurements on my IoT telemetry device in an external environment, developed during the masters degree.</p>
			<p>The same microcontroller as the telemetry device, NRF51822, was used to sample voltage levels and store them in flash memory using the SPI interface. For this purpose, an analog conditioning circuit was developed, with operational amplifiers, to limit the bandwidth of the sampled voltage signal.</p>
			<p>The images below show the top and bottom sides of the developed circuit.</p>
			<ScaledImage><Figure><Figure.Image src={String(front_datalogger)} /></Figure></ScaledImage>
			<ScaledImage><Figure><Figure.Image src={String(bottom_datalogger)} /></Figure></ScaledImage>>
			</Row>
		},
		{
			Title: 'Winner of the 2ª CubeDesign! Cubsat project',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>I had the opportunity to visit one of the most renowned research centers in Brazil, the National Institute for Space Research (INPE). In the photo below, here we are at the main lab with the largest vacuum chamber in Latin America!</p>
			<ScaledImage><Figure><Figure.Image src={String(inpe)} /></Figure></ScaledImage>
			<p>I came to visit the laboratory with my space-modeling that I was a part of at Unicamp. Our team signed up for the Cubesats (mini satellites) development competition at INPE. In this project, I was responsible for the development of Cubesats orientation algorithm, using solar panels. We used STM32F103 microcontrollers to process the data on the device, which I had to develop part of the logic and firmware. The image below shows the ready Cubsat.</p>
			<ScaledImage><Figure><Figure.Image src={String(cubesat)} /></Figure></ScaledImage>
			<p>Our Cubesat was subjected to a series of tests, including sensor telemetry, control of a reaction wheel and antenna ejection. Our team demonstrated the best results and we got the first place. Below shows a very proud team receiving our awards.</p>
			<ScaledImage><Figure><Figure.Image src={String(equipe)} /></Figure></ScaledImage>
			</Row>
		},
		{
			Title: 'RF power splitter simulation on HFSS',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>During one of my post-graduation semesters, one of my subjects was "guidance and radiation of RF waves". In this period I was able to better understand the phenomena of RF signals. I got in touch with computational tools for high frequency simulation, like CST and HFSS, and designed some devices, like passive filters, waveguides and a Wilkinson power splitter. The image below shows a power splitter that was simulated using the HFSS.</p>
			<ScaledImage><Figure><Figure.Image src={String(hfss)} /></Figure></ScaledImage>
			</Row>
		},
		{
			Title: '3 channel ECG circuit and computer interface',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>My final undergraduate work in electronic engineering was the development of an electrocardiograph circuit capable of capturing 3 ECG leads.</p>
			<p>In this work, I designed the entire analog and digital circuit for conditioning and digitizing the signals. I also had to develop the firmware for the Atmega328 microcontroller, which communicated via the UART interface with a computer. In turn, the graphical interface, that I programmed in C++ using the Qt library, received the data and showed it on the computer monitor.</p>
			<p>The images below show the manually prototyped circuit and the graphical interface showing the signals.</p>
			<ScaledImage><Figure><Figure.Image src={String(ecg_3channel)} /></Figure></ScaledImage>
			<ScaledImage><Figure><Figure.Image src={String(_interface)} /></Figure></ScaledImage>
			</Row>
		},
		{
			Title: 'DAC and ADC controlling plataform',
			Text:
			<Row style={{'text-align':'justify'}}>
			<p>Towards the end of my undergrad studies I did a scientific initiation. As a product of my work, I designed an electronic device to send and receive analog and digital signals. The circuit consisted of an Atmega328 microcontroller and an IC DAC, whose communication was established via the SPI interface. The circuit was designed using EDA Kicad software and manufactured industrially. The image below shows the final result.</p>
			<ScaledImage><Figure><Figure.Image src={String(sistema_medida)} /></Figure></ScaledImage>
			<p>For the control of the device, I developed an HMI in LabVIEW language, whose function was to send and receive commands via the UART interface. The images below shows the control interface.</p>
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
