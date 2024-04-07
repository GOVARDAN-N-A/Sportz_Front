import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chatapp.css'; // Import your CSS file

const socket = io('https://sportz-back.onrender.com');

const ChatBox = ({ loggedInUserEmail }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        socket.on('receive message', (receivedMessage) => {
            setMessages(prevMessages => [...prevMessages, receivedMessage]);
        });
    }, []);

    const sendMessage = () => {
        socket.emit('send message', { message: inputMessage, sender: loggedInUserEmail });
        setInputMessage('');
    };

    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="box box-warning direct-chat direct-chat-warning">
                            <div className="box-header with-border">
                                <h3 className="box-title">Chat Messages</h3>
                                <div className="box-tools pull-right">
                                    <span data-toggle="tooltip" title="" className="badge bg-yellow" data-original-title="3 New Messages">20</span>
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                                    <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="" data-widget="chat-pane-toggle" data-original-title="Contacts">
                                        <i className="fa fa-comments"></i>
                                    </button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="direct-chat-messages">
                                    {messages.map((message, index) => (
                                        <div className={`direct-chat-msg ${message.sender === loggedInUserEmail ? 'left' : 'right'}`} key={index}>
                                            <div className="direct-chat-info clearfix">
                                                <span className="direct-chat-name pull-left">{message.sender}</span>
                                                <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                                            </div>
                                            <img className="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image" />
                                            <div className="direct-chat-text">
                                                {message.message}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="box-footer">
                                <form action="#" method="post">
                                    <div className="input-group">
                                        <input type="text" name="message" placeholder="Type Message ..." className="form-control" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-warning btn-flat" onClick={sendMessage}>Send</button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
