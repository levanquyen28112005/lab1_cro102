import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

const eventInfo = [
  {
    title: "Lịch trình",
    events: [
      {
        location: "Hồ Tràm, Vũng Tàu",
        time: "09:00 AM - 12:00 AM, 12/12/2024",
        transport: "Xe bus",
        transportTime: "21:00 - 22:00",
        image: "https://dulichtuoitreviet.vn/image/cache/catalog/tai-moi/tai-712/bien-ho-tram-1-0x0.jpg",
      },
    ],
  },
  {
    title: "Khách sạn",
    events: [
      {
        name: "Hồng Quỳnh",
        checkinTime: "06:00 AM - 12:00 AM",
        address: "234 Quang Trung, Hồ Chí Minh",
      },
    ],
  },
];

const EventCard = ({ event }) => (
  <Card style={styles.card}>
    <Card.Content>
      {event.location && (
        <>
          <Paragraph style={styles.label}>Địa điểm</Paragraph>
          <Title style={styles.value}>{event.location}</Title>
        </>
      )}
      {event.time && (
        <>
          <Paragraph style={styles.label}>Thời gian</Paragraph>
          <Paragraph style={styles.value}>{event.time}</Paragraph>
        </>
      )}
      {event.transport && (
        <>
          <Paragraph style={styles.label}>Phương tiện di chuyển</Paragraph>
          <Paragraph style={styles.value}>{event.transport}</Paragraph>
        </>
      )}
      {event.transportTime && (
        <>
          <Paragraph style={styles.label}>Thời gian</Paragraph>
          <Paragraph style={styles.value}>{event.transportTime}</Paragraph>
        </>
      )}
      {event.image && (
        <>
          <Paragraph style={styles.label}>Hình ảnh</Paragraph>
          <Image source={{ uri: event.image }} style={styles.image} />
        </>
      )}
      {event.name && (
        <>
          <Paragraph style={styles.label}>Tên khách sạn</Paragraph>
          <Title style={styles.value}>{event.name}</Title>
        </>
      )}
      {event.checkinTime && (
        <>
          <Paragraph style={styles.label}>Giờ mở cửa</Paragraph>
          <Paragraph style={styles.value}>{event.checkinTime}</Paragraph>
        </>
      )}
      {event.address && (
        <>
          <Paragraph style={styles.label}>Địa điểm</Paragraph>
          <Paragraph style={styles.value}>{event.address}</Paragraph>
        </>
      )}
    </Card.Content>
    {event.name && (
      <Card.Actions>
        <Button mode="contained" style={styles.button} onPress={() => console.log("Chi tiết")}>
          CHI TIẾT
        </Button>
      </Card.Actions>
    )}
  </Card>
);

const Bai2 = () => {
  return (
    <ScrollView style={styles.container}>
      {eventInfo.map((section, index) => (
        <View key={index} style={styles.section}>
          <Title style={styles.sectionTitle}>{section.title}</Title>
          {section.events.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EDF1",
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  label: {
    color: "#555",
    fontWeight: "bold",
    fontSize: 14,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 340,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 8,
  },
  button: {
    alignSelf: "center",
  },
});

export default Bai2;
