import { Card, Image, List, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../Api";

const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.products);
    });
  }, []);
  return (
    <div>
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Card
              title={product.title}
              key={index}
              cover={
                <Image className="itemCardImage" src={product.thumbnail} />
              }
            >
              <Card.Meta
                title={
                  <Typography.Paragraph>
                    Prices : ${product.price} {""}
                    <Typography.Text delete type="danger">
                      $
                      {parseFloat(
                        product.price +
                          (
                            (product.price * product.discountPercentage) /
                            100
                          ).toFixed(2)
                      )}
                    </Typography.Text>
                  </Typography.Paragraph>
                }
              ></Card.Meta>
            </Card>
          );
        }}
        dataSource={items}
      ></List>
    </div>
  );
};

export default Products;
