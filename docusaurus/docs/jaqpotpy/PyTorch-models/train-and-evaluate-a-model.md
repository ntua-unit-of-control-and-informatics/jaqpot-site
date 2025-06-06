---
sidebar_position: 3
title: Train and Evaluate the Model
---

Once your model and data are ready, you can train the model using a standard loop. We use Mean Squared Error (MSE) as the loss function and the Adam optimizer. The code prints loss values every 10 epochs to monitor progress.

```python
criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

for epoch in range(100):
    model.train()
    total_loss = 0
    for batch_X, batch_y in train_loader:
        optimizer.zero_grad()
        outputs = model(batch_X)
        loss = criterion(outputs, batch_y)
        loss.backward()
        optimizer.step()
        total_loss += loss.item()
    if (epoch + 1) % 10 == 0:
        print(f"Epoch {epoch+1}, Loss: {total_loss/len(train_loader):.4f}")
```

