import React from 'react';
import '../scss/NewsItem.scss';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NewsIcon from '../assets/images/warning-sign.svg';

export default function NewsItem({ newsItemImage, newsItemName, newsItemDate, newsItemText, newsId }) {
  const testFunc = () => {
    console.log(newsId);
  };

  return (
    <Card className="news-item-card">
      <Card.Img variant="top" src={newsItemImage ? newsItemImage : NewsIcon} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <div className="news-item-name">{newsItemName}</div>
          <div className="news-item-date">{newsItemDate}</div>
        </Card.Title>
        <div className="news-item-body" dangerouslySetInnerHTML={{ __html: newsItemText }} />
        <Link to={`${newsId}`} className="news-item-button" onClick={testFunc}>
          ДЕТАЛЬНІШЕ
        </Link>
      </Card.Body>
    </Card>
  );
}
