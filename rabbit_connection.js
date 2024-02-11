const amqp = require('amqplib');

// RabbitMQ server URL (Change this to your RabbitMQ server URL)
const amqpServerUrl = 'amqp://localhost';

async function main() {
  try {
    // Create a connection to the RabbitMQ server
    const connection = await amqp.connect(amqpServerUrl);

    // Create a channel for communication
    const channel = await connection.createChannel();

    // Declare a queue
    const queueName = 'fttx_box';
    await channel.assertQueue(queueName, { durable: false });

    // Publish a message to the queue
    const message = 'Hello, RabbitMQ!';
    channel.sendToQueue(queueName, Buffer.from(message));

    console.log(`Sent: ${message}`);

    // Consume messages from the queue
    channel.consume(queueName, (msg) => {
      console.log(`Received: ${msg.content.toString()}`);
      // Acknowledge the message
      channel.ack(msg);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

main();