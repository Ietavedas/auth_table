import React, { useState } from 'react';
import { DatePicker, Select, Table, Button, Form, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import type { Dayjs } from 'dayjs';
import LayoutPage from '../../components/Layout';

const { RangePicker } = DatePicker;

interface DataType {
  id: number;
  date: string;
  orderNumber: string;
  category: string;
  status: string;
  manager: string;
  amount: number;
  client: string;
}

interface FormValues {
  dateRange: [Dayjs, Dayjs];
  category: string;
  status: string;
  manager: string;
}

const ReportPage: React.FC = () => {
  const [form] = Form.useForm<FormValues>();

  const [data, setData] = useState<DataType[]>([
    {
      id: 1,
      date: '2024-01-15',
      orderNumber: 'ORD-001',
      category: 'Электроника',
      status: 'Выполнен',
      manager: 'Иванов И.И.',
      amount: 15000,
      client: 'ООО "Технопрогресс"'
    },
    {
      id: 2,
      date: '2024-01-16',
      orderNumber: 'ORD-002',
      category: 'Мебель',
      status: 'В обработке',
      manager: 'Петров П.П.',
      amount: 45000,
      client: 'ИП Сидоров'
    },
  ]);

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => new Date(text).toLocaleDateString('ru-RU'),
    },
    {
      title: 'Номер заказа',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: 'Категория',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Менеджер',
      dataIndex: 'manager',
      key: 'manager',
    },
    {
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (value: number) => `${value.toLocaleString()} ₽`,
    },
    {
      title: 'Клиент',
      dataIndex: 'client',
      key: 'client',
    },
  ];

  const handleFinish = (values: FormValues): void => {
    console.log('Применены фильтры:', values);
    // Здесь будет логика фильтрации данных
  };

  const content = (
    <>
      <Form<FormValues>
        form={form}
        onFinish={handleFinish}
        layout="vertical"
        style={{ marginBottom: 24 }}
      >
        <Space style={{ width: '100%', justifyContent: 'space-between' }} align="start" wrap>
          <Form.Item
            name="dateRange"
            label="Период"
            style={{ minWidth: 300 }}
          >
            <RangePicker locale={locale} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="category"
            label="Категория"
            style={{ minWidth: 200 }}
          >
            <Select
              placeholder="Выберите категорию"
              options={[
                { value: 'electronics', label: 'Электроника' },
                { value: 'furniture', label: 'Мебель' },
                { value: 'office', label: 'Офисные товары' },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="status"
            label="Статус"
            style={{ minWidth: 200 }}
          >
            <Select
              placeholder="Выберите статус"
              options={[
                { value: 'completed', label: 'Выполнен' },
                { value: 'processing', label: 'В обработке' },
                { value: 'canceled', label: 'Отменен' },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="manager"
            label="Менеджер"
            style={{ minWidth: 200 }}
          >
            <Select
              placeholder="Выберите менеджера"
              options={[
                { value: 'ivanov', label: 'Иванов И.И.' },
                { value: 'petrov', label: 'Петров П.П.' },
                { value: 'sidorov', label: 'Сидоров С.С.' },
              ]}
            />
          </Form.Item>

          <Form.Item style={{ marginTop: 29 }}>
            <Button type="primary" htmlType="submit">
              Применить фильтры
            </Button>
          </Form.Item>
        </Space>
      </Form>

      <Table<DataType>
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{
          total: data.length,
          pageSize: 10,
          showTotal: (total: number) => `Всего ${total} записей`,
        }}
      />
    </>
  );

  return (
    <LayoutPage title="Отчет по заказам">
      {content}
    </LayoutPage>
  );
};

export default ReportPage;